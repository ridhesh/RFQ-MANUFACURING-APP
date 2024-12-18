package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PartPojo {
	private Integer partId;
	private String partDescription;
	private String partSpecification;
	private Integer stockInHand;
	

}
