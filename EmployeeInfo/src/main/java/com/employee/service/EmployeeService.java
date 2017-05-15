package com.employee.service;

import java.util.Hashtable;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.emploee.model.Employee;

@Service
public class EmployeeService {

	Hashtable<String,Employee> employeeData = new Hashtable<String,Employee>(); 

	public EmployeeService() {
		Employee employee = new Employee("112244","Ananya",24,"Sr Analyst",3200000);
		employeeData.put(employee.getId(),employee);
		employee = new Employee("113388","Balu",22,"Analyst",3200000);
		employeeData.put(employee.getId(),employee);
	}

	 /** Returns the employee details
	 * @return HashTable<String,Employee> employeeData
	 */
	public Hashtable<String,Employee> retriveEmployeeDetails(){
		return employeeData;

	}

	/** Adds new employee data
	 * @param employee
	 * @return String
	 */
	public String createEmployeeDetails(Employee employee){
		try{
			if(employee != null){
				employeeData.put(employee.getId(), employee);
			}
			return "Employee data created for::"+employee.getName();
		}
		catch (NullPointerException exception) {
			return "Employee data with null id cannot be created";
		}

	}

	/** Deletes employee detail
	 * @param employeeId
	 * @return String message
	 */
	public String deleteEmployeeDetail(String employeeId){
		String message = "";
		boolean employeeIdFound = false;
		if(employeeId != null ){
			for(Map.Entry<String, Employee> entry:employeeData.entrySet()){    
				if(entry.getKey().equals(employeeId)){
					employeeData.remove(employeeId);
					employeeIdFound = true;
					message = "Employee data deleted";
					break;
				}
			} 
			
			if(!employeeIdFound){
				message = "Employee Id not found";
			} 
		}
		return message;
		
	}


	/** Updates employee detail by fetching the employee id
	 * @param employeeId
	 * @param employee
	 * @return String status
	 */
	public String updateEmployeeDetails(Employee employee,String employeeId){
		String status = "";
		boolean isUpdated = false;
		if(employee != null && employeeId != null){
			for(Map.Entry<String, Employee> entry:employeeData.entrySet()){    
				if(entry.getKey().equalsIgnoreCase(employeeId)){
					entry.setValue(employee);
					isUpdated = true;
					status = "Employee data updated for"+employee.getName();
					break;
				}

			}   
			if(!isUpdated){
				status = "Employee Id does not exist in Employee details";
			}
		}
		
		return status;
	}



}
