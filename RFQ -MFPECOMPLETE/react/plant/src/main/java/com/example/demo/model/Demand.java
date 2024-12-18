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
@Table(name="demand")
public class Demand {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "demandid")
	private Integer demandId;

	

	@Column(name = "demandcount")
	private Integer demandCount;

	@Column(name = "demandraiseddate")
	private LocalDate demandRaisedDate;
	
	@OneToOne(targetEntity = Part.class)
	@JoinColumn(name = "partid")
	@JsonBackReference
	private Part part;
}
