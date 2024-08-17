import ToolTip from '@/components/common/ToolTip';
import { useTimeSelectionLogic } from '@/hooks/useTimeSelectionLogic';
import { TimeTableData, ResultHeatmapProps } from '@/types/timeTableTypes';
import BaseTimeTable from '../common/timetable/BaseTimeTable';
import ResultTimeCell from '../common/timetable/ResultTimeCell';

interface ResultTimeTableProps {
  data: TimeTableData;
  roomInfo: ResultHeatmapProps;
  dragDisabled: boolean;
}

function ResultTimeTable({
  data,
  roomInfo,
  dragDisabled,
}: ResultTimeTableProps) {
  const {
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    isSelected,
    handleCellHover,
    tooltipInfo,
    heatmapRef,
  } = useTimeSelectionLogic({ isSelectOption: false });

  const renderCell = (hour: string, date: string, minute: string) => {
    const slot = roomInfo.selectTime.find(
      (s) => s.time === `${date}T${hour}:${minute}`
    );
    const intensity = slot
      ? slot.userCount / roomInfo.totalParticipants.count
      : 0;

    const timeSlot = {
      hour,
      minute,
      day: data.days[data.dates.indexOf(date)],
      date,
      month: data.months[data.dates.indexOf(date)],
      users: slot ? slot.users : [],
      userCount: slot ? slot.userCount : 0,
    };

    return (
      <ResultTimeCell
        key={`${hour}-${date}-${minute}`}
        timeSlot={timeSlot}
        isSelected={isSelected(hour, minute, timeSlot.day)}
        intensity={intensity}
        dragDisabled={dragDisabled}
        onHover={(e) => handleCellHover(e, timeSlot)}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragEnd={handleDragEnd}
      />
    );
  };

  return (
    <div ref={heatmapRef} style={{ position: 'relative' }}>
      <BaseTimeTable data={data} renderCell={renderCell} />
      {tooltipInfo && (
        <ToolTip
          content={tooltipInfo.content}
          x={tooltipInfo.x}
          y={tooltipInfo.y}
        />
      )}
    </div>
  );
}

export default ResultTimeTable;
