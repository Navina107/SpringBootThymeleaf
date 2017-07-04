package com.coats.model;

import java.util.Date;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.coats.config.UniqueID;


public class CoatsEmployee {
	@UniqueID
	private String employeeId;
	@NotNull
	@Size(min=2, max=30,message = "Please enter between {min} and {max} characters.")
	@Pattern(regexp = "^[A-Za-z]*$*",message = "Invalid characters - Only alphabets allowed")
	private String employeeName;
	
	@NotNull
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date dateOfJoining;
	
	@AssertTrue
	private Boolean agreeTermsAndConditions;
	private SkillSet[] skillSet;
	@NotNull
	private BusinessUnit businessUnit;
	private String employeeDesignation;
	private double employeeSalary;

	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public Date getDateOfJoining() {
		return dateOfJoining;
	}
	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}
	public Boolean getAgreeTermsAndConditions() {
		return agreeTermsAndConditions;
	}
	public void setAgreeTermsAndConditions(Boolean agreeTermsAndConditions) {
		this.agreeTermsAndConditions = agreeTermsAndConditions;
	}
	public SkillSet[] getSkillSet() {
		return skillSet;
	}
	public void setSkillSet(SkillSet[] skillSet) {
		this.skillSet = skillSet;
	}
	public BusinessUnit getBusinessUnit() {
		return businessUnit;
	}
	public void setBusinessUnit(BusinessUnit businessUnit) {
		this.businessUnit = businessUnit;
	}
	public String getEmployeeDesignation() {
		return employeeDesignation;
	}
	public void setEmployeeDesignation(String employeeDesignation) {
		this.employeeDesignation = employeeDesignation;
	}
	public double getEmployeeSalary() {
		return employeeSalary;
	}
	public void setEmployeeSalary(double employeeSalary) {
		this.employeeSalary = employeeSalary;
	}
	public CoatsEmployee(String employeeId, String employeeName, Date dateOfJoining, Boolean agreeTermsAndConditions,
			SkillSet[] skillSet, BusinessUnit businessUnit, String employeeDesignation, double employeeSalary) {
		super();
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.dateOfJoining = dateOfJoining;
		this.agreeTermsAndConditions = agreeTermsAndConditions;
		this.skillSet = skillSet;
		this.businessUnit = businessUnit;
		this.employeeDesignation = employeeDesignation;
		this.employeeSalary = employeeSalary;
	}
	public CoatsEmployee() {
		super();
		// TODO Auto-generated constructor stub
	}



}
