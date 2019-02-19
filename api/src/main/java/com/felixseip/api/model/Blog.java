package com.felixseip.api.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "blogs")
public class Blog implements Serializable {

    @Id
    @Column(name = "id", nullable = false, updatable = false)
    private long id;

    @Column(name = "cover_img")
    private String coverImgURL;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "body", nullable = false)
    private String body; //Needs to be HTML encoded

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "published_date")
    private Date publishingDate; //Null if it has not been published yet

    @Column(name = "published")
    private boolean published;

    public Blog(){}

    public Blog(String title, String body, Date publishingDate, boolean published) {
        this.title = title;
        this.body = body;
        this.publishingDate = publishingDate;
        this.published = published;
    }
}
