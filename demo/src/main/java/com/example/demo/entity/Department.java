package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long departmentId;
    private String departmentName;
    private String departmentAddress;
    private String departmentCode;
    //Setter and Getter
    public Long getDepartmentId() {
        return departmentId;
    }
    public void setDepartmentId(Long departmentId) {
        this.departmentId = departmentId;
    }
    public String getDepartmentName() {
        return departmentName;
    }
    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }
    public String getDepartmentAddress() {
        return departmentAddress;
    }
    public void setDepartmentAddress(String departmentAddress) {
        this.departmentAddress = departmentAddress;
    }
    public String getDepartmentCode() {
        return departmentCode;
    }
    public void setDepartmentCode(String departmentCode) {
        this.departmentCode = departmentCode;
    }
    //All argument constructor
    public Department(Long departmentId, String departmentName, String
            departmentAddress, String departmentCode) {
        super();
        this.departmentId = departmentId;
        this.departmentName = departmentName;
        this.departmentAddress = departmentAddress;
        this.departmentCode = departmentCode;
    }
    //No argument constructor
    public Department() {
        super();
// TODO Auto-generated constructor stub
    }
    //toString method
    @Override
    public String toString() {
        return "Department [departmentId=" + departmentId + ", departmentName=" +
                departmentName + ", departmentAddress="
                + departmentAddress + ", departmentCode=" + departmentCode +
                "]";
    }
}
