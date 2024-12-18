package com.example.demo.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class rfqvo {
	private int rfqId;
	private int demandid;
	private int partId;
	private String partName;
	private int quantity;
	private int timetoSupply;
	private String Specification;
}
