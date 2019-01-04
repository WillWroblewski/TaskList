package com.tasklist.api.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.tasklist.api.en.TaskType;

@Entity
@Table(name = "task")
public class Task {
	
	protected Task() {		
		
	}
		
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;		
	private String title;		
	private String description;	
	private TaskType status;
	private Date creation;
	private Date edition;	
	
	public long getId() {
		return id;
	}	
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public TaskType getStatus() {
		return status;
	}
	
	public void setStatus(TaskType status) {
		this.status = status;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Date getCreation() {
		return creation;
	}
	
	public void setCreation(Date creation) {
		this.creation = creation;
	}
	
	public Date getEdition() {
		return edition;
	}
	
	public void setEdition(Date edition) {
		this.edition = edition;
	}

}
