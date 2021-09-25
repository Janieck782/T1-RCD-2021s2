package com.model;

import java.io.Serializable;
import java.util.List;

public class SplitterResponseModel implements Serializable {

    private List<String> nombres;
    private List<String> apellidos;

    public SplitterResponseModel(List<String> nombres, List<String> apellidos) {
        super();
        this.nombres = nombres;
        this.apellidos = apellidos;
    }

    public List<String> getNombres() {
        return nombres;
    }

    public List<String> getApellidos() {
        return apellidos;
    }

    public void setNombres(List<String> nombres) {
        this.nombres = nombres;
    }

    public void setApellidos(List<String> apellidos) {
        this.apellidos = apellidos;
    }
}
