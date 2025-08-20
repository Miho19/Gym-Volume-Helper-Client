import { http, HttpResponse } from "msw";
import { toURL } from "..";
import type {
  UserWorkoutPresetListResponseType,
  WorkoutPresetType,
} from "../../Http/ResponseType/UserWorkoutPresetsResponseType";

export const WorkoutPresetListHandlers = [
  http.get(toURL("/me/workout/"), getWorkoutPresetList),
];

function getWorkoutPresetList() {
  const bodyResponse: UserWorkoutPresetListResponseType = {
    userID: "12345",
    userName: "Josh April",
    items: testExerciseList,
  };

  return HttpResponse.json(bodyResponse);
}

const testExerciseList: WorkoutPresetType[] = [
  {
    id: "1",
    ownerID: "12345",
    name: "Preset 1",
    exerciseIDList: ["K6NnTv0", "U0uPZBq", "QD32SbB"],
    imgURL: "https://picsum.photos/id/237/200/300",
    ownerName: "Josh April",
    ownerProfilePictureURL:
      "https://scontent.fpmr1-1.fna.fbcdn.net/v/t39.30808-6/464865815_27316730121305627_365363424115207086_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TKDErlILbY8Q7kNvwEpNC_P&_nc_oc=AdmGYUiyoACPQPvO8pa3JGO1DgWavgT5v1Bg5XhGKY5O9dHz_xhTvb63ynVMdlJh9bY&_nc_zt=23&_nc_ht=scontent.fpmr1-1.fna&_nc_gid=yFnSZN2e6DYDK_0IIMu4PA&oh=00_AfT4NmOZ8YrgvRSl8ifWyy4dpiU-mhncI3UB2BNxLXzCjw&oe=686F26E0",
  },
];
