package ru.vlasoff.news.newsapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vlasoff.news.newsapp.model.NewsModel;
import ru.vlasoff.news.newsapp.service.ServiceImpl;

import java.util.List;

@RestController
@RequestMapping("api/v1/news")
@CrossOrigin
public class NewsAPI {

    private final ServiceImpl service;

    @Autowired
    public NewsAPI(ServiceImpl service) {
        this.service = service;
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<NewsModel> getPostById(@PathVariable Long id) {
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        NewsModel post = service.getPostById(id);
        if (post == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(post, HttpStatus.OK);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<NewsModel> savePost(@RequestBody NewsModel post) {
        HttpHeaders headers = new HttpHeaders();
        if (post == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        service.save(post);
        return new ResponseEntity<>(post, headers, HttpStatus.OK);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<NewsModel> updatePost(@RequestBody NewsModel post) {
        HttpHeaders headers = new HttpHeaders();
        if (post == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        service.save(post);
        return new ResponseEntity<>(post, headers, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<NewsModel> deletePost(@PathVariable Long id) {
        if (service.getPostById(id) == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<NewsModel>> getAllNews() {
        List<NewsModel> news = service.getAll();
        if (news.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(news, HttpStatus.OK);
    }
}
