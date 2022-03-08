export class Crud {
    constructor(_id="",set_id="",task_title="",task_description="",date_time=""){
        this._id= _id;
        this.set_id=set_id;
        this.task_title=task_title;
        this.task_description=task_description;
        this.date_time=date_time;
    }
    _id:string;
    set_id:string;
    task_title:string;
    task_description:string;
    date_time:string;
}
