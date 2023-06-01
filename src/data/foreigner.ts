import data from "./data (1).json";
import IDataItem from "./dataType";

const Data: IDataItem[] = data;

const foreignerWithDuration25 = Data.filter(
    (item) => item.duration === 25 && item.type === "FOREIGNER"
);
const foreignerWithDuration45 = Data.filter(
    (item) => item.duration === 45 && item.type === "FOREIGNER"
);
const foreignerWithDuration60 = Data.filter(
    (item) => item.duration === 60 && item.type === "FOREIGNER"
);
const foreignerWithDuration90 = Data.filter(
    (item) => item.duration === 90 && item.type === "FOREIGNER"
);

export const foreignerArray = [
    foreignerWithDuration25.filter(
        (item) => foreignerWithDuration25.indexOf(item) < 4
    ),
    foreignerWithDuration45.filter(
        (item) => foreignerWithDuration45.indexOf(item) < 4
    ),
    foreignerWithDuration60.filter(
        (item) => foreignerWithDuration60.indexOf(item) < 4
    ),
    foreignerWithDuration90.filter(
        (item) => foreignerWithDuration90.indexOf(item) < 4
    ),
];

const fiveClasssesPlans = [
    foreignerWithDuration25.filter((item) => item.nbLessons === 5),
    foreignerWithDuration45.filter((item) => item.nbLessons === 5),
    foreignerWithDuration60.filter((item) => item.nbLessons === 5),
    foreignerWithDuration90.filter((item) => item.nbLessons === 5),
];

const tenClasssesPlans = [
    foreignerWithDuration25.filter((item) => item.nbLessons === 10),
    foreignerWithDuration45.filter((item) => item.nbLessons === 10),
    foreignerWithDuration60.filter((item) => item.nbLessons === 10),
    foreignerWithDuration90.filter((item) => item.nbLessons === 10),
];

const twentyClasssesPlans = [
    foreignerWithDuration25.filter((item) => item.nbLessons === 20),
    foreignerWithDuration45.filter((item) => item.nbLessons === 20),
    foreignerWithDuration60.filter((item) => item.nbLessons === 20),
    foreignerWithDuration90.filter((item) => item.nbLessons === 20),
];

const fortyClasssesPlans = [
    foreignerWithDuration25.filter((item) => item.nbLessons === 40),
    foreignerWithDuration45.filter((item) => item.nbLessons === 40),
    foreignerWithDuration60.filter((item) => item.nbLessons === 40),
    foreignerWithDuration90.filter((item) => item.nbLessons === 40),
];

export const foreignerArrayPlans = [
    [fiveClasssesPlans],
    [tenClasssesPlans],
    [twentyClasssesPlans],
    [fortyClasssesPlans],
];
