package com.example.demo;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UserDetailsService;
import static org.junit.jupiter.api.Assertions.assertEquals;


import com.example.demo.controller.UserController;

@SpringBootTest
class AuthorizationApplicationTests {

	@Autowired
	private UserController userController;
	 @Autowired
	  private UserDetailsService userDetailsService;

	@Test
	public void contextLoads() {

		assertNotNull(userController);

	}
	@Test
	public void loadUserByUsernameTestSuccess() {

		assertEquals("farhan", userDetailsService.loadUserByUsername("farhan").getUsername());
	}



}
