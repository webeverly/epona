# File has to be saved in UTF-8 with BOM to work because of accents.

# This script transforms the Excel to a JSON file.

$outputFileName = (Join-Path $PSScriptRoot "../src/data/documents.json");
function Main() {
  #Install-Module ImportExcel -scope CurrentUser -Confirm:$False;

  $produce = Import-Excel "./variables.xlsx" -WorksheetName "DATA" `
  | Where-Object { $_.TYPE.Length -gt 0 };

  
  $produceMapped = $produce | Select-Object -Property `
  @{ Name = "_id"; Expression = { $_."NOM_EN".ToLowerInvariant().Replace(", ", "-").Replace(" ", "-") } }, `
  @{ Name = "name_en"; Expression = { $_."NOM_EN".Trim() } }, `
  @{ Name = "name_fr"; Expression = { $_."NOM_FR".Trim() } }, `
  @{ Name = "type"; Expression = { if ($_."TYPE".ToLowerInvariant() -eq "fruit") { "fruit" } else { "vegetable" } } }, `
  @{ Name = "is_climacteric"; Expression = { if ($_."ISCLIMATERIC" -eq 1) { return $true } elseif ($_."ISCLIMATERIC" -eq 0) { return $false } else { return $null } } }, `
  @{ Name = "is_ethylene_sensitive"; Expression = { $_."ISSENSITIVE" -eq 1 } }, `
  @{ Name = "ethylene_emmission"; Expression = { $_."EMISSION_ETHYLENE".ToLowerInvariant().Replace(" ", "-") } }, `
  @{ Name = "ethylene_sensitivity"; Expression = { $_."SENSIBILITE_ETHYLENE" } }, `
  @{ Name = "image_url"; Expression = { $_."IMAGE_LINK" } };

  $produceMapped;
  $produceMapped | ConvertTo-Json | Out-File $outputFileName -Encoding UTF8;
}

Main;

npx prettier --write $outputFileName;