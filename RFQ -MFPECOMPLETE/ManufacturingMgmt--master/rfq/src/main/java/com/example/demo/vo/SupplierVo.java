package com.example.demo.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SupplierVo {
	private Integer supplier_id;
	private String name;
	private String email;
	private String phone;
	private String location;
	private int feedback;

}
