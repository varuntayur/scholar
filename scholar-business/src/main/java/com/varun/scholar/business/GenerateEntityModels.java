package com.varun.scholar.business;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

public class GenerateEntityModels {

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
				.replaceAll(";", "").replaceAll("'", "")
				.replaceAll("dateFormat:n/jh:ia", "")
				.replaceAll("dateFormat:n/j h:ia", "")
				.replaceAll("dateFormat:n/j h:ia", "")
				.replaceAll("dateFormat:Y-m-d", "")
				.replaceAll("dateFormat:FDY", "").replaceAll(",,", ",");

		sbr.setLength(0);
		sbr.append(replace);
	}

	private static List<String> extractDataTypes(StringBuilder fileContents) {

		List<String> lstDatatypes = new ArrayList<String>();

		StringBuilder sbr = fileContents;

		int indexOf = sbr.indexOf("name:");
		if (indexOf >= 0) {
			cleanupData(sbr, indexOf);
			// System.out.println(sbr.toString());
		}

		indexOf = sbr.indexOf("name :");
		if (indexOf >= 0) {
			cleanupData(sbr, indexOf);
			// System.out.println(sbr.toString());
		}

		String[] split = sbr.toString().split(",");
		// System.out.println(Arrays.asList(split));

		for (int i = 0; i < split.length; i += 2) {
			String name = split[i];
			String type = "";
			if ((i + 1) < split.length)
				type = split[i + 1];

			String entityAttributes = type.replaceAll("type:", "") + " "
					+ name.replaceAll("name:", "");

			String parsedDeclaration = entityAttributes.concat(";").trim();

			if (parsedDeclaration.contains("string"))
				parsedDeclaration = StringUtils.capitalize(parsedDeclaration);
			else if (parsedDeclaration.contains("date")) {
				parsedDeclaration = "\n@Temporal(TemporalType.DATE)\n"
						+ StringUtils.capitalize(parsedDeclaration);
			}

			parsedDeclaration = parsedDeclaration.replaceAll("bool", "boolean");

			lstDatatypes.add(parsedDeclaration);
		}
		return lstDatatypes;

	}

	public static void main(String[] args) {

		String rootUiModelFolderHome = "C:\\Users\\Varun\\scholar\\scholar-web\\";
		String rootEntityModelFolderHome = "C:\\Users\\Varun\\scholar\\scholar-business\\";

		String rootUiModelFolderOffice = "C:\\Development\\scholar\\scholar-web\\";
		String rootEntityModelFolderOffice = "C:\\Development\\scholar\\scholar-business\\";

		String uiModelFilePath = rootUiModelFolderHome
				+ "src\\main\\webapp\\app\\model\\";
		String entityModelFilePath = rootEntityModelFolderHome
				+ "src\\main\\java\\com\\varun\\scholar\\business\\data\\entities1\\";

		listFiles(uiModelFilePath);

		Map<File, StringBuilder> mapFile2Contents = extractFileContents();

		for (File file : mapFile2Contents.keySet()) {
			System.out.println(file.getAbsolutePath());
			StringBuilder fileContents = mapFile2Contents.get(file);
			List<String> lstDatatypes = extractDataTypes(fileContents);

			String importAndPackage = "package com.varun.scholar.business.data.entities1;\n\n"
					+ "import java.util.Date;\n"
					+ "import javax.persistence.Entity;\n"
					+ "import javax.persistence.Temporal;\n"
					+ "import javax.persistence.TemporalType;\n"
					+ "import com.varun.scholar.business.data.entities.AbstractEntity;";

			String className = StringUtils.capitalize(file.getName())
					.replaceAll(".js", "");
			String classNameDeclaratino = "\n\n@Entity\n public class "
					+ className + " extends AbstractEntity {  \n";
			String classNameEnd = " \n }  \n";

			// System.out.println(importAndPackage);
			// System.out.println(classNameDeclaratino);
			// for (String string : lstDatatypes) {
			//
			// System.out.println(string);
			// }
			// System.out.println(classNameEnd);

			try {
				FileWriter fw = new FileWriter(entityModelFilePath + className
						+ ".java");
				fw.write(importAndPackage);
				fw.write(classNameDeclaratino);
				for (String string : lstDatatypes) {
					fw.write(string);
				}
				fw.write(classNameEnd);
				fw.flush();
				fw.close();
			} catch (IOException e) {
				e.printStackTrace();
			}

		}

	}
}
