package ch.raiffeisen.hackzurich.controller;

import ch.raiffeisen.hackzurich.domain.Person;
import ch.raiffeisen.hackzurich.repository.PersonRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * Created by simon on 20.06.2017.
 */
@RestController
@RequestMapping("/api/personen")
public class DemoController {

    @Resource
    private PersonRepository personRepository;


    @RequestMapping(path = "/", method= RequestMethod.GET)
    public Iterable<Person> listPersonen() {
        return personRepository.listPerson();
    }

}
