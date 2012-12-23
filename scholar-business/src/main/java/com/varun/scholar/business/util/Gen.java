package com.varun.scholar.business.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class Gen {

	private static List<File> lstFiles = new ArrayList<File>();

	public static void listFiles(String path) {

		File root = new File(path);
		File[] list = root.listFiles();

		for (File f : list) {
			if (f.isDirectory()) {
				listFiles(f.getAbsolutePath());
				// System.out.println("Dir:" + f.getAbsoluteFile());
			} else {
				// System.out.println("File:" + f.getAbsoluteFile());
				lstFiles.add(f);

			}
		}
	}

	private static Map<File, StringBuilder> extractFileContents() {

		Map<File, StringBuilder> mapFileContents = new HashMap<File, StringBuilder>();
		for (File file : lstFiles) {
			try {
				FileReader fr = new FileReader(file);
				BufferedReader br = new BufferedReader(fr);
				String line = null;
				StringBuilder sbr = new StringBuilder();
				while ((line = br.readLine()) != null) {
					// System.out.println(line);
					sbr.append(line);
				}
				br.close();
				mapFileContents.put(file, sbr);
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return mapFileContents;
	}

	private static void cleanupData(StringBuilder sbr, int indexOf) {

		String replace = sbr.substring(indexOf).replaceAll(" ", "")
				.replaceAll("\t", "").replaceAll("\n", "")
				.replaceAll("\\}", "").replaceAll("\\{", "")
				.replaceAll("\\]", "").replaceAll("\\[", "")
				.replaceAll("\\(", "").replaceAll("\\)", "")
				.replaceAll(";", "").replaceAll("'", "");

		sbr.setLength(0);
		sbr.append(replace);
	}

	private static void extractDataTypes(
			Map<File, StringBuilder> mapFileContents) {
		for (File file : mapFileContents.keySet()) {
			System.out.println(file.getAbsolutePath());
			StringBuilder sbr = mapFileContents.get(file);

			int indexOf = sbr.indexOf("name:");
			if (indexOf >= 0) {
				cleanupData(sbr, indexOf);
				System.out.println(sbr.toString());
			}

			indexOf = sbr.indexOf("name :");
			if (indexOf >= 0) {
				cleanupData(sbr, indexOf);
				System.out.println(sbr.toString());
			}

			String[] split = sbr.toString().split(",");
			System.out.println(Arrays.asList(split));

			for (int i = 0; i < split.length; i += 2) {
				String name = split[i];
				String type = split[i + 1];
				System.out.println(type + name);
			}

		}
	}

	public static void main(String[] args) {

		String filePath = "C:\\Development\\scholar\\scholar-web\\src\\main\\webapp\\app\\model\\";

		listFiles(filePath);

		Map<File, StringBuilder> mapFileContents = extractFileContents();

		extractDataTypes(mapFileContents);

	}
}
