$a=(Get-NetAdapter -InterfaceDescription *pan*).ifIndex 
#$a
$b=Get-NetRoute -DestinationPrefix 0.0.0.0/0 -ifindex $a
#$b
$c=(Get-NetIPAddress -InterfaceIndex $a).IPAddress
$d="route change 0.0.0.0 mask 0.0.0.0 $c metric 90 if $a"
$d
cmd /c $d