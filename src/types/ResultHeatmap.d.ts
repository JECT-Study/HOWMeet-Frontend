export interface ResultHeatmapProps {
  RoomId: number;
  totalParticipants: {
    count: number;
    names: string[];
  };
  selectTime: {
    time: string;
    users: string[];
    userCount: number;
  }[];
  participatedUsers: {
    count: number;
    names: string[];
  };
}

export interface AdjustColorProps {
  ratio: number;
}

export interface TimeSlot {
  hour: string;
  minute: string;
  day: string;
  date: string;
  month: string;
}