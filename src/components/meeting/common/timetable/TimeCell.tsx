import React, { useCallback } from 'react';
import styled from 'styled-components';
import { CellProps, TimeSlot } from '@/types/timeTableTypes';

interface TimeCellProps {
  timeSlot: TimeSlot;
  isSelected: boolean;
  dragDisabled: boolean;
  onDragStart: (timeSlot: TimeSlot) => void;
  onDragMove: (timeSlot: TimeSlot) => void;
  onDragEnd: () => void;
}

function TimeCell({
  timeSlot,
  isSelected,
  dragDisabled,
  onDragStart,
  onDragMove,
  onDragEnd,
}: TimeCellProps) {
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!dragDisabled) {
        e.preventDefault(); // Prevent scrolling
        onDragStart(timeSlot);
      }
    },
    [dragDisabled, onDragStart, timeSlot]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!dragDisabled) {
        e.preventDefault(); // Prevent scrolling
        const touch = e.touches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        if (element && element.getAttribute('data-timeslot')) {
          const touchedTimeSlot = JSON.parse(
            element.getAttribute('data-timeslot') || '{}'
          );
          onDragMove(touchedTimeSlot);
        }
      }
    },
    [dragDisabled, onDragMove]
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault(); // Prevent any default behavior
      onDragEnd();
    },
    [onDragEnd]
  );

  return (
    <HalfCell
      selected={isSelected}
      onMouseDown={() => !dragDisabled && onDragStart(timeSlot)}
      onMouseEnter={(e) =>
        !dragDisabled && e.buttons === 1 && onDragMove(timeSlot)
      }
      onMouseUp={onDragEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      data-timeslot={JSON.stringify(timeSlot)}
    />
  );
}

const MemoizedTimeCell = React.memo(TimeCell);
export default MemoizedTimeCell;

const HalfCell = styled.div<CellProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? '#E2F5E3' : 'white')};
  &:first-child {
    border-bottom: 1px dashed #ccc;
  }
  touch-action: none; // Disable browser handling of all panning and zooming gestures
`;