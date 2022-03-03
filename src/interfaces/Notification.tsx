interface Notification {
  id?: string | number;
  title: string;
  description?: string;
  date: string;
  status: boolean;
}

export default Notification;
