package view;

import java.awt.Button;
import java.awt.Dimension;
import java.awt.Frame;
import java.awt.Label;
import java.awt.ScrollPane;
import java.awt.TextArea;
import java.awt.TextField;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.io.IOException;
import java.net.Socket;

import net.WriteClass;

public class ChatFrame extends Frame implements WindowListener, ActionListener {
	ChatListFrame clf;
	Label mainLabel = new Label("STALK");
	Label roomNameLabel;
	public TextArea TextList = new TextArea();
	public TextField input = new TextField(20);
	Button sendBtn = new Button("send");
	Button backBtn = new Button("←");
	Socket socket;
	WriteClass wc;

	public ChatFrame(ChatListFrame clf, Socket socket, String roomName) {
		this.socket = socket;
		System.out.println("socket update : " + socket);
		this.clf = clf;
		setLayout(null);
		setTitle("chatting Room");
		wc = new WriteClass(socket, this);

		mainLabel.setBounds(50, 50, 80, 30);
		add(mainLabel);
		roomNameLabel = new Label("반갑습니다 " + roomName + "채팅방 입니다");
		roomNameLabel.setBounds(150, 50, 500, 30);
		add(roomNameLabel);
		backBtn.setBounds(670, 50, 50, 30);
		backBtn.addActionListener(this);
		add(backBtn);
		ScrollPane sPane = new ScrollPane();
		sPane.setPreferredSize(new Dimension(200, 120));
		sPane.add(TextList);
		sPane.setBounds(50, 100, 600, 500);
		add(sPane);

		// memList 에 실시간 채팅 member 담아주기

		input.setBounds(50, 630, 500, 30);
		add(input);
		sendBtn.setBounds(560, 630, 90, 30);
		sendBtn.addActionListener(this);
		add(sendBtn);

		setBounds(0, 0, 750, 720);
		setVisible(false);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		if (obj == sendBtn || obj == input) {
			if (input.getText().trim().equals(""))
				return;

			// server 전송
			wc.sendMessage();

			input.setText("");
		} else if (obj == backBtn) {	// 뒤로가기
			try {
				socket.close();	// 소켓 종료
				System.out.println("socket deleted : " + socket);
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			// clf 시각화
			clf.setVisible(true);
			// 현재창 닫기
			this.dispose();
		}
	}

	@Override
	public void windowOpened(WindowEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void windowClosing(WindowEvent e) {
		System.exit(0);

	}

	@Override
	public void windowClosed(WindowEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void windowIconified(WindowEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void windowDeiconified(WindowEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void windowActivated(WindowEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void windowDeactivated(WindowEvent e) {
		// TODO Auto-generated method stub

	}

}
