package model;

import java.util.Date;

public class Blog {

    private String title;
    private String body; //Needs to be HTML encoded
    private Date publishingDate; //Null if it has not been published yet
    private long id;
    private boolean published;

    public Blog(String title, String body, Date publishingDate, boolean published) {
        this.title = title;
        this.body = body;
        this.publishingDate = publishingDate;
        this.published = published;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return this.body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Date getPublishingDate() {
        return this.publishingDate;
    }

    public void setPublishingDate(Date publishingDate) {
        this.publishingDate = publishingDate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean isPublished() {
        return this.published;
    }

    public void setPublished(boolean published) {
        this.published = published;
    }
}
