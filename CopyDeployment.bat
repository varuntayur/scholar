echo "copying Shared interfaces"
xcopy shared\target\scholar-shared-0.0.1-SNAPSHOT.jar %JBOSS_HOME%\standalone\deployments\

echo "copying Business module"
xcopy scholar-business\target\scholar-business.war %JBOSS_HOME%\standalone\deployments\

echo "copying REST module"
xcopy scholar-rest\target\scholar-rest.war %JBOSS_HOME%\standalone\deployments\

echo "Press to exit"
pause > nul
