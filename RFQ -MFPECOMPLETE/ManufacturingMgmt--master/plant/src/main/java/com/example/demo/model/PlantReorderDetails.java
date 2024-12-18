package com.example.demo.model;

import java.time.LocalDate;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="plantreorderdetails")
public class PlantReorderDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer prdid;
	
	@Column(name= "reorderstatus")
	private String reorderStatus;
	
	@Column(name= "reorderdate")
	private LocalDate reorderdate;
	
	@ManyToOne(targetEntity = Part.class)
	@JoinColumn(name = "partid")
	//@JsonBackReference
	private Part part;
	
}
