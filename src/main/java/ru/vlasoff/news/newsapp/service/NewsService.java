package ru.vlasoff.news.newsapp.service;


import ru.vlasoff.news.newsapp.model.NewsModel;

import java.util.List;

public interface NewsService {

    NewsModel getPostById(Long id);
    void save(NewsModel post);
    void delete(Long id);
    List<NewsModel> getAll();
}
