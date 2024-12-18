package com.example.demo.model;

import javax.persistence.*;
import javax.validation.constraints.NegativeOrZero;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="supplier_part")
public class Supplier_part {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "partid")
	private int partid;


	@Column(name = "partname")
	private String partname;

	private int quantity;

	@Column(name = "timeperiod")
	private int timeperiod;
	
	
	public Supplier_part(int id, int partid, String partname, int quantity, int timeperiod) {
		super();
		this.id = id;
		this.partid = partid;
		this.partname = partname;
		this.quantity = quantity;
		this.timeperiod = timeperiod;
	}


	@ManyToOne
	@JoinColumn(name="sid")
	@JsonBackReference
	private Supplier supplier;
	
}
