package ch.raiffeisen.hackzurich.repository;

import ch.raiffeisen.hackzurich.domain.Person;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by simon on 12.09.2017.
 */
@Component
public class PersonRepository {

    public List<Person> listPerson() {
        List<Person> db = new ArrayList<>();
        db.add(new Person("Harry", "Hirsch"));
        db.add(new Person("Franz", "Klamemr"));
        return db;
    }
}
