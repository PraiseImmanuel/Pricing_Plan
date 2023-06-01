interface ILabel {
    ru: string;
    en: string;
}

export default interface IDataItem {
    nbLessons: number;
    duration: number;
    label: ILabel;
    description: string;
    plan: null | string;
    type: string;
    price: {
        primary: number;
        secondary: null | number;
    };
}
