package com.example.demo.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.feign.authfeign;
import com.example.demo.model.Demand;
import com.example.demo.model.Part;
import com.example.demo.model.PartPojo;
import com.example.demo.model.ReorderRules;
import com.example.demo.model.Result;
import com.example.demo.service.PlantService;
import com.example.demo.vo.rfqvo;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/plant")
@CrossOrigin(origins = "*")
@Slf4j
public class PlantController {

	@Autowired
	private PlantService pserv;

	@Autowired
	private authfeign afeign;

	@GetMapping(value = "/viewPartsReOrder", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Part>> viewPartsReorder(@RequestHeader("Authorization") String authorization) {
		log.info("Inside ViewPartsReorder of PartController");
		//afeign.getUname(authorization);
		List<Part> partList = pserv.findAllPartsInReorder();
		if (partList.isEmpty()) {
			throw new NoSuchElementException();
		}
		return new ResponseEntity<List<Part>>(partList, HttpStatus.OK);
	}

	@GetMapping("/viewStockInHand/{partId}")// return new ResponseEntity<List<Part>>(HttpStatus.NOT_FOUND);
	public ResponseEntity<PartPojo> viewStockInHand(@RequestHeader("Authorization") String authorization,
			@PathVariable int partId) {
		log.info("Inside viewStockInHand of PartController");
		afeign.getUname(authorization);
		PartPojo part = pserv.viewStockInHand(partId);
		if (part == null) {
			return new ResponseEntity<PartPojo>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<PartPojo>(part, HttpStatus.OK);
	}

	@PutMapping("/updateMinMaxQuantity/{id}/{min}/{max}") 
	public ResponseEntity<Result> updateMinMaxQuantities( @RequestHeader("Authorization") String authorization,@PathVariable(value = "id") int id,
			@PathVariable(value = "min") int min, @PathVariable(value = "max") int max) {
		log.info("Inside updateMinMaxQuantities of PartController");
		Result res = pserv.updateMinAndMax(id, min, max);
		afeign.getUname(authorization);
		return new ResponseEntity<Result>(res, HttpStatus.OK);
	}

	@GetMapping("/getRFQ") // @RequestHeader("Authorization") String authorization
	public List<rfqvo> getRFQDetails() {
		// afeign.getUname(authorization);
		return pserv.getRfqvo();
	}
}
