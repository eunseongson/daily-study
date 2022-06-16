package main;

import java.net.Socket;

import net.ReadClassThread;
import net.ReadThread;
import view.ChatListFrame;

public class MainClass {
	public static ReadThread rt;
	public static String IP = "192.168.0.103";

	public static void main(String[] args) {
		try {
			Socket socket = new Socket(IP, 9000); // 서버 접속
			System.out.println("connection Success!!");

			ChatListFrame cf = new ChatListFrame(socket);

			new ReadClassThread(socket).start();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
