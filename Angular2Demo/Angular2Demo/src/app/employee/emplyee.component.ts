import {Component} from "@angular/core"

@Component({
    selector: "my-employee",
    templateUrl:"app/employee/employee.component.html"
})
export class EmployeeComponent {

    FirstName: string = "Tony";
    LastName: string = "Stephen";
    Gender:string="Female";
    Age:number=20;

}
