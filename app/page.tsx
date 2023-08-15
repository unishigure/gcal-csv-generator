import { GridRowsProp } from "@mui/x-data-grid";
import ScheduleForm from "./component/scheduleForm";
import ScheduleTable from "./component/scheduleTable";
import HowToDialog from "./component/howTo";

let scheduleRows: Array<Object> = [];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-8 bg-slate-400 text-black/60">
      <h1 className="text-3xl mb-4">gCal&nbsp;CSV&nbsp;Generator</h1>
      <HowToDialog />
      <ScheduleForm {...scheduleRows} />
      {/* <ScheduleTable /> */}
    </main>
  );
}
