package ru.vlasoff.news.newsapp.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.vlasoff.news.newsapp.model.NewsModel;
import ru.vlasoff.news.newsapp.repo.NewsRepo;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class ServiceImpl implements NewsService {

    private final NewsRepo repo;

    @Autowired
    public ServiceImpl(NewsRepo repo) {
        this.repo = repo;
    }

    @Override
    public NewsModel getPostById(Long id) {
        log.info("IN ServiceImpl getById {}", id);
        NewsModel post = null;
        Optional<NewsModel> optionalPost = repo.findById(id);
        if (optionalPost.isPresent()) {
            post = optionalPost.get();
        }
        return post;
    }

    @Override
    public void save(NewsModel post) {
        log.info("IN ServiceImpl save {}", post);
        repo.save(post);
    }

    @Override
    public void delete(Long id) {
        log.info("IN ServiceImpl delete {}", id);
        repo.deleteById(id);
    }

    @Override
    public List<NewsModel> getAll() {
        log.info("IN ServiceImpl getAll");
        return (List<NewsModel>) repo.findAll();
    }
}
