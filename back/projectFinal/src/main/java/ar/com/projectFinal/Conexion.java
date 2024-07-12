package ar.com.projectFinal;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;




public class Conexion 
{
	public String driver="com.mysql.cj.jdbc.Driver";
	
	public Connection getConnection() throws ClassNotFoundException
	{
		Connection conexion=null;
		try
		{
			
			Class.forName(driver);
			conexion=DriverManager.getConnection("jdbc:mysql://localhost:3306/pruebaFinal","root","1234");//nombre de db y contraseña
			
		}
		
		catch(SQLException error)
		{
			
			System.out.println("hay un error: "+error);
		}		
		return conexion;
	}	

	
	
	
	
	
	
	
	
	
	
	
	public static void main(String[] args) throws ClassNotFoundException, SQLException
	{
		
		Connection conexion=null;
		Conexion con=new Conexion();
		conexion=con.getConnection();
		
		
		PreparedStatement ps;
		ResultSet rs;
		ps=conexion.prepareStatement("select * from peliculas");		
		rs=ps.executeQuery();
		while(rs.next()) // .next se ejecuta mientras haya más filas disponibles en el rs
		{
			
			String titulo=rs.getString("titulo");
			System.out.println(titulo);	
			
		}
		
	}
}
