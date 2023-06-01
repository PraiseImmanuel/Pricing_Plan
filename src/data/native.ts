import data from "./data (1).json";
import IDataItem from "./dataType";

const Data: IDataItem[] = data;

const nativeWithDuration25 = Data.filter(
    (item) => item.duration === 25 && item.type === "NATIVE"
);
const nativeWithDuration45 = Data.filter(
    (item) => item.duration === 45 && item.type === "NATIVE"
);
const nativeWithDuration60 = Data.filter(
    (item) => item.duration === 60 && item.type === "NATIVE"
);
const nativeWithDuration90 = Data.filter(
    (item) => item.duration === 90 && item.type === "NATIVE"
);
export const nativeArray = [
    nativeWithDuration25,
    nativeWithDuration45,
    nativeWithDuration60,
    nativeWithDuration90,
];
