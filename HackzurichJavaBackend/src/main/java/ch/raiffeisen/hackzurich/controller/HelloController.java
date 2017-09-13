package ch.raiffeisen.hackzurich.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@RestController
public class HelloController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot by stef!";
    }


    @RequestMapping("/userhome")
    public String userhome() {
        return System.getProperty("user.dir");
    }

    @RequestMapping("/files")
    public List<String> files() {
        List<String> result = new ArrayList<>();
        File file  = new File(System.getProperty("user.dir"));
        File[] files = file.listFiles();
        for (File file1 : files) {
            result.add(file1.getAbsolutePath());
        }
        return result;
    }

}