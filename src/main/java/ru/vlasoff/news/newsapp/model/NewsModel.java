package ru.vlasoff.news.newsapp.model;

import com.sun.istack.NotNull;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "content")
@Data
public class NewsModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    @NotNull
    private String title;

    @Column(name = "image_url")
    @NotNull
    private String imageUrl;


    @Column(name = "content_text")
    @NotNull
    private String text;

    @Column(name = "content_time")
    @NotNull
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date time;

    @Column(name = "content_topic")
    @NotNull
    private String topic;

    @Column(name = "short_text")
    @NotNull
    private String shortText;

}
