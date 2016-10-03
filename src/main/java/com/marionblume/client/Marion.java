package com.marionblume.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.Style.Cursor;
import com.google.gwt.dom.client.Style.Display;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.TextResource;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.SimplePanel;

public class Marion implements EntryPoint {

	static String resourcesPath = GWT.getModuleBaseURL() + "./../resources/";

	interface Resources extends ClientBundle {
		Resources INSTANCE = GWT.create(Resources.class);

		@Source("res/subtitles0.txt")
		TextResource subtitles0();

		@Source("res/subtitles1.txt")
		TextResource subtitles1();

		@Source("res/subtitles2.txt")
		TextResource subtitles2();

		@Source("res/subtitles3.txt")
		TextResource subtitles3();
	}

	String[][] subtitles;

	@Override
	public void onModuleLoad() {
		readSubtitles();

		History.addValueChangeHandler(new ValueChangeHandler<String>() {
			public void onValueChange(ValueChangeEvent<String> event) {
				String historyToken = event.getValue();

				Element home = Document.get().getElementById("home");
				Element details = Document.get().getElementById("details");
				Element about = Document.get().getElementById("about");
				Element contact = Document.get().getElementById("contact");

				boolean isHome = historyToken.endsWith("home") || historyToken.isEmpty();
				boolean isDetails = historyToken.matches(".*home/\\d+/\\d+");
				boolean isAbout = historyToken.endsWith("about");
				boolean isContact = historyToken.endsWith("contact");

				home.getStyle().setProperty("display", isHome ? "flex" : "none"); // Display.FLEX does not exist yet...
				details.getStyle().setDisplay(isDetails ? Display.TABLE : Display.NONE);
				about.getStyle().setDisplay(isAbout ? Display.TABLE : Display.NONE);
				contact.getStyle().setDisplay(isContact ? Display.TABLE : Display.NONE);

				if (isDetails) {
					String[] split = historyToken.split("/");
					int nProject = Integer.valueOf(split[1]);
					int nImage = Integer.valueOf(split[2]);
					fillDetails(nProject, nImage);
				}
			}
		});
	}

	private void readSubtitles() {
		subtitles = new String[3][];
		subtitles[0] = Resources.INSTANCE.subtitles0().getText().split("\\n");
		subtitles[1] = Resources.INSTANCE.subtitles1().getText().split("\\n");
		subtitles[2] = Resources.INSTANCE.subtitles2().getText().split("\\n");
		subtitles[3] = Resources.INSTANCE.subtitles3().getText().split("\\n");
	}

	private void fillDetails(final int nProject, int nImage) {
		int nSmallImages = subtitles[nProject].length;

		Element bigImageElem = Document.get().getElementById("bigimage");
		bigImageElem.removeAllChildren();
		HTMLPanel bigImage = HTMLPanel.wrap(bigImageElem);
		Element smallImagesElem = Document.get().getElementById("smallimages");
		smallImagesElem.removeAllChildren();
		HTMLPanel smallImages = HTMLPanel.wrap(smallImagesElem);
		Element subtitle = Document.get().getElementById("subtitle");

		Image image = new Image(resourcesPath + "images/" + nProject + "/" + nImage + ".jpg");
		image.getElement().getStyle().setWidth(802, Unit.PX);
		SimplePanel div = new SimplePanel();
		div.setWidget(image);
		bigImage.add(div);

		subtitle.setInnerHTML(subtitles[nProject][nImage]);

		for (int i = 0; i < nSmallImages; i++) {
			image = new Image(resourcesPath + "images/" + nProject + "/" + i + "_small.jpg");
			image.getElement().getStyle().setWidth(188, Unit.PX);
			image.getElement().getStyle().setMarginLeft(10, Unit.PX);
			image.getElement().getStyle().setMarginBottom(10, Unit.PX);
			image.getElement().getStyle().setCursor(Cursor.POINTER);
			final int iFinal = i;
			image.addClickHandler(new ClickHandler() {
				@Override
				public void onClick(ClickEvent event) {
					History.newItem("home/" + nProject + "/" + iFinal);
				}
			});
			div = new SimplePanel();
			div.setWidget(image);
			div.getElement().getStyle().setDisplay(Display.INLINE_BLOCK);
			smallImages.add(div);
		}
	}
}
