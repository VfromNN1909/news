package ru.vlasoff.news.newsapp.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.vlasoff.news.newsapp.model.NewsModel;

@Repository
public interface NewsRepo extends CrudRepository<NewsModel, Long> {

}
