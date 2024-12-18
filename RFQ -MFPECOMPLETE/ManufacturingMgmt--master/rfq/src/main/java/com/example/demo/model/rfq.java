package com.example.demo.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="rfq")
public class rfq {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="rfqid")
	private int rfqId;
	
	@Column(name="demandid")
	private int demandid;

	@Column(name = "partid")
	private int partId;
	
	@Column(name = "quantity")
	private int quantity;
	
	@Column(name = "partname")
	private String partName;
	
	@Column(name = "timetosupply")
	private int timetoSupply;
	
	@Column(name = "specification")
	private String Specification;
}
