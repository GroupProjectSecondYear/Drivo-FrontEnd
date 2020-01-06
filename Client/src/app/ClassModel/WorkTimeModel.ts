import { AdminModel } from './AdminModel';

export class WorkTimeModel{
    constructor(
        public workTimeId:Number,
        public updateDate:Date,
        public applyMonth:Number,
        public fullDay:Number,
        public halfDay:Number,
        public adminId:AdminModel
    ){}
}