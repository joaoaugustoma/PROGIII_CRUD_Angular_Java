package com.ueg.progIII;

import com.ueg.progIII.model.Cliente;
import com.ueg.progIII.repository.ClienteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Calendar;
import java.util.Date;

@SpringBootApplication
public class NutshellApplication {

	public static void main(String[] args) {
		SpringApplication.run(NutshellApplication.class, args);
	}

//	@Bean
//	public CommandLineRunner commandLineRunner(ClienteRepository clienteRepository) {
//		return args -> {
//			Cliente cliente = new Cliente("70240686128", "João Augusto", "Moreira Ananias", new Date(2001 - 1900, Calendar.NOVEMBER, 16), "62991868792", "Rua L-21 Qd 46 Lt 16 Jardim Europa");
//			cliente  = clienteRepository.save(cliente);
//
//			cliente = new Cliente("12345678912", "Isadora Pinto", "Aquino Rego", new Date(1997 - 1900, Calendar.MAY, 4), "6299999999", "Rua Sasuke Naruto");
//			cliente  = clienteRepository.save(cliente);
//		};
//	}

}
