package com.example.demo.model;

import java.util.List;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="supplier")
public class Supplier {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer supplier_id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="email")
	private String email;

	@Column(name="phone")
	private String phone;

	@Column(name="location")
	private String location;

	@Column(name="feedback")
	private int feedback;
	
	
	public Supplier(Integer supplier_id, String name, String email, String phone, String location, int feedback) {
		super();
		this.supplier_id = supplier_id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.location = location;
		this.feedback = feedback;
	}

	public Supplier(String name, String email, String phone, String location, int feedback) {
		super();
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.location = location;
		this.feedback = feedback;
	}
	public Supplier(Integer supplier_id,int feedback) {
		super();
		this.supplier_id = supplier_id;
		this.feedback = feedback;
	}

	@JsonBackReference
	@OneToMany(mappedBy="supplier",cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	List<Supplier_part> parts;
}
