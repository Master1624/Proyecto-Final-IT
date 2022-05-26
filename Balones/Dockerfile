#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Balones/Balones.csproj", "Balones/"]
RUN dotnet restore "Balones/Balones.csproj"
COPY . .
WORKDIR "/src/Balones"
RUN dotnet build "Balones.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Balones.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Balones.dll"]
