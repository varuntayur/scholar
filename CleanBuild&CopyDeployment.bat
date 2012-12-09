pushd
	echo "Cleaning deployments"
	del %JBOSS_HOME%\standalone\deployments\scholar-shared-0.0.1-SNAPSHOT.jar
	del %JBOSS_HOME%\standalone\deployments\scholar-business.war
	del %JBOSS_HOME%\standalone\deployments\scholar-rest.war
popd

pushd shared
	echo "Building Shared interfaces"
	call mvn clean install
popd


pushd scholar-business
	echo "Building Business interface"
	call mvn clean install
popd


pushd scholar-rest
	echo "Building REST interfaces"
	call mvn clean install
popd


echo "copying Shared interfaces"
xcopy shared\target\scholar-shared-0.0.1-SNAPSHOT.jar %JBOSS_HOME%\standalone\deployments\

echo "copying Business module"
xcopy scholar-business\target\scholar-business.war %JBOSS_HOME%\standalone\deployments\

echo "copying REST module"
xcopy scholar-rest\target\scholar-rest.war %JBOSS_HOME%\standalone\deployments\

echo "Press to exit"
pause > nul
