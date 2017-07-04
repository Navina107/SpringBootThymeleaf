package com.coats.config;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UniqueIDValidate  implements ConstraintValidator<UniqueID, String>{

 
    public void initialize(UniqueID constraint) {
    }
 

	@Override
	public boolean isValid(String employeeId, ConstraintValidatorContext context) {
		// TODO Auto-generated method stub
		if(employeeId!=null && employeeId.matches("[0-9]+") )
		{
			return true;
		}
		return false;
	}
}
