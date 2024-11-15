import { TimeSlot, TimeTableData } from '@/types/timeTableTypes';
import { useTimeSelectionLogic } from '@/hooks/useTimeSelectionLogic';
import BaseTimeTable from '../timetable/BaseTimeTable';
import SelectTimeCell from '../timetable/SelectTimeCell';

interface SelectableTimeTableProps {
  data: TimeTableData;
  dragDisabled?: boolean;
}

function SelectableTimeTable({
  data,
  dragDisabled = false,
}: SelectableTimeTableProps) {
  const { handleDragStart, handleDragMove, handleDragEnd, isSelected } =
    useTimeSelectionLogic({ isSelectOption: true });

  const renderCell = (
    hour: string,
    date: string,
    minute: string,
    isStartCellHalf: boolean,
    isEndCellHalf: boolean
  ) => {
    const timeSlot = {
      hour,
      minute,
      day: data.days[data.dates.indexOf(date)],
      date,
      month: data.months[data.dates.indexOf(date)],
    };

    const isDisabled =
      (data.isContainMidnight &&
        date === data.dates[0] &&
        hour < data.startHour) ||
      (data.isContainMidnight &&
        date === data.dates[data.dates.length - 1] &&
        hour >= data.endHour);

    return (
      <SelectTimeCell
        key={`${hour}-${date}-${minute}`}
        timeSlot={timeSlot}
        isSelected={isSelected(hour, minute, timeSlot.day, timeSlot.date)}
        dragDisabled={dragDisabled}
        onDragStart={handleDragStart as (timeSlot: TimeSlot) => void}
        onDragMove={handleDragMove as (timeSlot: TimeSlot) => void}
        onDragEnd={handleDragEnd}
        isEndCellHalf={isEndCellHalf}
        isStartCellHalf={isStartCellHalf}
        disabled={isDisabled || false}
      />
    );
  };

  return <BaseTimeTable data={data} renderCell={renderCell} />;
}

export default SelectableTimeTable;
