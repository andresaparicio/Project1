package com.revature.beans;

public class FormBean {
	
	//NEED TO MATCH HTML FORM NAMES
	private int form_id;
	private String emp_name;
	private String emp_last_name;
	private float cost_ammount;
	
	public FormBean(int form_id, String emp_name, String emp_last_name, float cost_ammount) {
		super();
		this.form_id = form_id;
		this.emp_name = emp_name;
		this.emp_last_name = emp_last_name;
		this.cost_ammount = cost_ammount;
	}
	
	public FormBean() {
		super();
	}

	public int getForm_id() {
		return form_id;
	}

	public void setForm_id(int form_id) {
		this.form_id = form_id;
	}

	public String getEmp_name() {
		return emp_name;
	}

	public void setEmp_name(String emp_name) {
		this.emp_name = emp_name;
	}

	public String getEmp_last_name() {
		return emp_last_name;
	}

	public void setEmp_last_name(String emp_last_name) {
		this.emp_last_name = emp_last_name;
	}

	public float getCost_ammount() {
		return cost_ammount;
	}

	public void setCost_ammount(float cost_ammount) {
		this.cost_ammount = cost_ammount;
	}

	@Override
	public String toString() {
		return "FormBean [form_id=" + form_id + ", emp_name=" + emp_name + ", emp_last_name=" + emp_last_name
				+ ", cost_ammount=" + cost_ammount + "]";
	}
	
	
	

}
