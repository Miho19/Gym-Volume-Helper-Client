// import type { ExerciseMetric } from "../../Http/Response/UserExerciseMetricsResponseType";
// import type { ExerciseListElement } from "../../Http/Response/UserWorkoutPresetsResponseType";
// import { exerciseDetailsHandlers } from "./exerciseDetailsHandlers";
// import { exerciseMetricsHandlers } from "./exerciseMetricsHandlers";

// export const exerciseHandlers = [
//   ...exerciseDetailsHandlers,
//   ...exerciseMetricsHandlers,
// ];

// export const TestMinExerciseListElementList: ExerciseListElement[] = [
//   {
//     id: "VPPtusI",
//     name: "inverted row bent knees",
//     img: "https://static.exercisedb.dev/media/VPPtusI.gif",
//     pageLink: "VPPtusI",
//   },
//   {
//     id: "8d8qJQI",
//     name: "barbell reverse grip incline bench row",
//     img: "https://static.exercisedb.dev/media/8d8qJQI.gif",
//     pageLink: "8d8qJQI",
//   },
//   {
//     id: "JGKowMS",
//     name: "smith narrow row",
//     img: "https://static.exercisedb.dev/media/JGKowMS.gif",
//     pageLink: "JGKowMS",
//   },
// ];

// export let currentMetricID = 3;

// export const testUserMetric: ExerciseMetric = {
//   exerciseID: "VPPtusI",
//   metricID: String(currentMetricID),
//   dateTime: new Date(),
//   sets: [
//     { reps: 12, weight: 8 },
//     { reps: 8, weight: 8 },
//     { reps: 5, weight: 9 },
//   ],
// };

// export const UserExerciseMetrics: ExerciseMetric[] = [
//   testUserMetric,
//   {
//     exerciseID: "8d8qJQI",
//     metricID: "2",
//     dateTime: new Date(),
//     sets: [
//       { reps: 8, weight: 10 },
//       { reps: 8, weight: 10 },
//       { reps: 5, weight: 12 },
//     ],
//   },
//   {
//     exerciseID: "JGKowMS",
//     metricID: "3",
//     dateTime: new Date(),
//     sets: [
//       { reps: 6, weight: 16 },
//       { reps: 6, weight: 16 },
//       { reps: 5, weight: 16 },
//     ],
//   },
// ];

// export function addNewMetric(newMetric: ExerciseMetric) {
//   newMetric.metricID = String(++currentMetricID);
//   UserExerciseMetrics.push(newMetric);
// }

// import { http, HttpResponse } from "msw";
// import { toURL } from "..";
// import type {
//   ExerciseMetric,
//   UserExerciseMetricsResponseType,
// } from "../../Http/Response/UserExerciseMetricsResponseType";
// import type { POSTUserMetricRequestBody } from "../../Http/Request/POSTUserExerciseMetric";
// import { prepareDatesForComparison } from "../../Components/Exercise/Metrics/MetricFormDateValidation";
// import {
//   addNewMetric,
//   currentMetricID,
//   UserExerciseMetrics,
// } from "./oldexercisecode";

// type MetricsParams = {
//   exerciseID: string;
// };

// export const exerciseMetricsHandlers = [
//   http.get<MetricsParams, undefined, UserExerciseMetricsResponseType>(
//     toURL("/me/exercise/:exerciseID"),
//     ({ params }) => {
//       const { exerciseID } = params;

//       const filterList = UserExerciseMetrics.filter(
//         (metric) => metric.exerciseID === exerciseID,
//       );

//       const bodyResponse: UserExerciseMetricsResponseType = {
//         exerciseID: exerciseID,
//         items: filterList,
//       };

//       return HttpResponse.json(bodyResponse);
//     },
//   ),
//   http.post<MetricsParams, POSTUserMetricRequestBody, undefined>(
//     toURL("/me/exercise/:exerciseID"),
//     async ({ params, request }) => {
//       const { exerciseID } = params;

//       const { exerciseID: requestExerciseID, metric: requestMetric } =
//         await request.json();

//       if (exerciseID !== requestExerciseID) return HttpResponse.error();

//       const index = UserExerciseMetrics.findIndex((metric) => {
//         const [dateA, dateB] = prepareDatesForComparison([
//           metric.dateTime.toDateString(),
//           requestMetric.dateTime,
//         ]);

//         if (metric.exerciseID !== exerciseID) return false;

//         if (dateA.getTime() !== dateB.getTime()) return false;

//         return true;
//       });

//       if (index !== -1) {
//         const currentMetric = UserExerciseMetrics[index];
//         currentMetric.sets.push({
//           reps: requestMetric.reps,
//           weight: requestMetric.weight,
//         });
//         return new HttpResponse({}, { status: 200 });
//       }

//       const newMetric: ExerciseMetric = {
//         exerciseID,
//         metricID: "",
//         dateTime: new Date(requestMetric.dateTime),
//         sets: [{ weight: requestMetric.weight, reps: requestMetric.reps }],
//       };

//       addNewMetric(newMetric);

//       return new HttpResponse({}, { status: 200 });
//     },
//   ),
// ];

// import { http, HttpResponse } from "msw";
// import { toURL } from "..";

// import type { ExerciseListElement } from "../../Http/Response/UserWorkoutPresetsResponseType";
// import { TestMinExerciseListElementList } from "./oldexercisecode";

// type GETMinExerciseParams = {
//   exerciseID: string;
// };

// export const exerciseDetailsHandlers = [
//   http.get<GETMinExerciseParams, undefined, ExerciseListElement>(
//     toURL("/min/exercise/:exerciseID"),
//     ({ params }) => {
//       const { exerciseID } = params;

//       const exercise = TestMinExerciseListElementList.find(
//         (ex) => ex.id === exerciseID,
//       );
//       if (typeof exercise === "undefined") return HttpResponse.error();

//       return HttpResponse.json(exercise);
//     },
//   ),
// ];
