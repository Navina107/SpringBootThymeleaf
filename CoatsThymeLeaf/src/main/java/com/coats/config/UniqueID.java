package com.coats.config;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;
import java.lang.annotation.ElementType;
import java.lang.annotation.RetentionPolicy;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniqueIDValidate.class)
public @interface UniqueID {
    String message() default "Enter valid id";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
