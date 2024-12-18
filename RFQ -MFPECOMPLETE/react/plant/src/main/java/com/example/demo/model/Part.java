package com.example.demo.model;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="part")
public class Part {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "partid")
	private Integer partId;
	
	@Column(name = "partdescription")
	private String partDescription;
	
	@Column(name = "partspecification")
	private String partSpecification;
	
	@Column(name = "stockinhand")
	private Integer stockInHand;
	
	
	public Part(Integer partId, String partDescription, String partSpecification, Integer stockInHand) {
		super();
		this.partId = partId;
		this.partDescription = partDescription;
		this.partSpecification = partSpecification;
		this.stockInHand = stockInHand;
	}

	@OneToOne(mappedBy="part",cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonBackReference
	private ReorderRules reorderrule;
	
	@OneToOne(mappedBy="part",cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonBackReference
	private Demand demand;
	
	@OneToMany(mappedBy="part",cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonBackReference
	private List<PlantReorderDetails> reoderdetails;
}
